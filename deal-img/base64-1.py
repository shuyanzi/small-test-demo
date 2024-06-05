# # import os
# # import base64
# # from PIL import Image

# # def encode_image_to_base64(image_path):
# #     with open(image_path, "rb") as image_file:
# #         encoded_string = base64.b64encode(image_file.read())
# #         return encoded_string.decode("utf-8")

# # def batch_convert_images_to_base64(directory):
# #     base64_list = []
# #     for filename in sorted(os.listdir(directory)):
# #         if filename.endswith(".jpg") or filename.endswith(".jpeg"):
# #             image_path = os.path.join(directory, filename)
# #             print(f"Base64 encodings have been saved to {image_path}")
# #             base64_string = encode_image_to_base64(image_path)
# #     #         base64_list.append(base64_string)
    
# #     # with open("base64.txt", "w") as file:
# #     #     file.write("\n".join(base64_list))

# # # 指定包含JPEG图片的目录路径
# # image_directory = "/Users/work/fe/facetec-sre/core-sdk/FaceTecSDK.js/scripts/output-imgs-composite2-wasm-c-4-8-replay/wasmd2"

# # # 调用函数批量转换图片为Base64编码并保存到文件
# # batch_convert_images_to_base64(image_directory)
# import os
# import base64

# # 设置JPEG文件所在的目录
# jpeg_directory = "/Users/work/fe/facetec-sre/core-sdk/FaceTecSDK.js/scripts/output-imgs-composite2-wasm-c-4-8-replay/wasmd2"

# # 输出文件的路径
# output_file_path = 'b1.txt'

# # 打开输出文件准备写入
# with open(output_file_path, 'w', encoding='utf-8') as output_file:
#     # 遍历目录中的所有文件
#     for filename in os.listdir(jpeg_directory):
#         if filename.lower().endswith('.jpeg') or filename.lower().endswith('.jpg'):
#             # 完整的文件路径
#             file_path = os.path.join(jpeg_directory, filename)
            
#             # 读取JPEG文件的内容
#             with open(file_path, 'rb') as image_file:
#                 image_data = image_file.read()
#                 # 将JPEG文件内容转换为Base64编码
#                 image_base64 = base64.b64encode(image_data).decode('utf-8')
                
#                 # 将Base64编码和文件名写入输出文件
#                 output_file.write(f"Image: {filename}\nBase64: {image_base64}\n\n")

# # 打印完成消息
# print(f"Base64 encodings have been saved to {output_file_path}")