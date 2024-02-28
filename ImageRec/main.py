import cv2 as cv
import numpy as np
import matplotlib.pyplot as plt

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
