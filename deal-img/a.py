from PIL import Image, ImageDraw
import os
 
# 设置要镜像的图片文件夹路径
folder_path = '/Users/work/test/deal-img/img'
new_folder_path = '/Users/work/test/deal-img/img2'
 
 
# 获取文件夹中所有图片名
image_names = [f for f in os.listdir(folder_path) if f.endswith('.jpeg') or f.endswith('.png')]

# 打开蒙层图片
mask_path = "/Users/work/test/deal-img/mask.png"
mask_image = Image.open(mask_path).convert("L")
color_count = 250
# 遍历图片名列表并镜像图片
for image_name in image_names:
    # 构造旧文件的路径和新文件的路径
    old_image_path = os.path.join(folder_path, image_name)
    # new_image_path = os.path.join(new_folder_path, 'mirrored_' + image_name)
    new_image_path = os.path.join(new_folder_path, '' + image_name)
    # 打开图片并镜像
    with Image.open(old_image_path) as image:
        mirrored_image = image.transpose(Image.FLIP_LEFT_RIGHT)
        # 使用quantize方法降低颜色值
        reduced_image = mirrored_image.quantize(colors=color_count)
        # 保存镜像后的图片
        reduced_image.convert("RGB").save(new_image_path, format='JPEG')

        # reduced_image.save(new_image_path)
        # mirrored_image.save(new_image_path)
        # # 创建一个新的图像，将镜像图像和蒙层合并
        # masked_image = Image.new("RGBA", mirrored_image.size)
        # masked_image.paste(mirrored_image, (0, 0), mask=mask_image)

        # 创建一个新的图像，将镜像图像和蒙层合并
        # masked_image = Image.open(mask_path).resize(mirrored_image.size).convert("L")
        # masked_image = Image.new("RGBA", mirrored_image.size)
        # masked_image.paste(mirrored_image, (0, 0), mask=mask_image)

        # # 保存输出图片
        # masked_image.save(output_path)

        # # 保存输出图片
        # masked_image.save(new_image_path)
        print(f'{image_name}已镜像并保存为{new_image_path}')
