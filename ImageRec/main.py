import cv2 as cv
import numpy as np
import matplotlib.pyplot as plt
import vision from '@google-cloud/vision';

from tensorflow.keras import datasets, layers, models

(training_images, training_labels),(testing_images, testing_lables) = datasets.cifar10.load_data ()
training_images, testing_images = training_images/255, testing_images/255

items = ["Phones","Computes","Washing Machines", "Smart TV","Laptops",]

for i in range(16):
    plt.subplot(4,4,i+1)
    plt.xticks([])
    plt.yticks([])
    plt.imshow(training_images[i], cmap = plt.cm.binary)
    plt.xlabel(items[testing_lables[i][0]])

plt.show()


def detect_labels(path):
    """Detects labels in the file."""
    from google.cloud import vision

    client = vision.ImageAnnotatorClient()

    with open(path, "rb") as image_file:
        content = image_file.read()

    image = vision.Image(content=content)

    response = client.label_detection(image=image)
    labels = response.label_annotations
    print("Labels:")

    for label in labels:
        print(label.description)

    if response.error.message:
        raise Exception(
            "{}\nFor more info on error messages, check: "
            "https://cloud.google.com/apis/design/errors".format(response.error.message)
        )

print(detect_labels('../images/shoe2.jpg'))
print(detect_labels('../images/speec.jpg'))

