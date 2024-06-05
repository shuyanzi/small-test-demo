import os
import cv2
import matplotlib.pyplot as plt

def calculate_brightness(img_path):
    """计算图片亮度"""
    img = cv2.imread(img_path)
    if img is None:
        print(f"无法读取图片: {img_path}")
        return 0

    # 转换为灰度图
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # 计算亮度
    brightness = gray.mean()

    return brightness

def plot_brightness(folder_path):
    """绘制文件夹中所有图片的亮度折线图"""
    brightness_values = []
    image_names = []
    print(f"test...")
    for filename in os.listdir(folder_path):
        if filename.endswith(('.jpeg', '.png')):
            img_path = os.path.join(folder_path, filename)
            brightness = calculate_brightness(img_path)
            brightness_values.append(brightness)
            image_names.append(filename)
            print(f"文件名: {filename}, 亮度值: {brightness}")  # 打印文件名和亮度值

    # 绘制折线图
    plt.figure(figsize=(12, 6))
    plt.plot(image_names, brightness_values, '-o')
    plt.xticks(rotation=90)
    plt.xlabel('Image Name')
    plt.ylabel('Brightness')
    plt.title('Image Brightness Plot')
    plt.grid(True)
    plt.show()



# 使用示例
folder_path = '/Users/fangjin/Downloads/test-image'
plot_brightness(folder_path)