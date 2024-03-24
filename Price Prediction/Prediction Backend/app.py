from flask import Flask, render_template, request, send_from_directory
import pickle
import numpy as np
import os

# setup application
app = Flask(__name__)

def prediction(lst):
    filename = 'niketh/src/assets/prediction.pickle' #getting the pickle file
    with open(filename, 'rb') as file:
        model = pickle.load(file)
    pred_value = model.predict([lst])
    return pred_value

@app.route('/', methods=['POST', 'GET'])#sending the information
def index():
    pred_value = 0
    if request.method == 'POST':
        ram = request.form['ram']
        weight = request.form['weight']
        company = request.form['company']
        typename = request.form['typename']
        opsys = request.form['opsys']
        cpu = request.form['cpuname']
        gpu = request.form['gpuname']
        touchscreen = request.form.getlist('touchscreen')
        ips = request.form.getlist('ips')
        
        feature_list = [int(ram), float(weight), len(touchscreen), len(ips)]
        company_list = ['acer', 'apple', 'asus', 'dell', 'hp', 'lenovo', 'msi', 'other', 'toshiba']
        typename_list = ['2in1convertible', 'gaming', 'netbook', 'notebook', 'ultrabook', 'workstation']
        opsys_list = ['linux', 'mac', 'other', 'windows']
        cpu_list = ['amd', 'intelcorei3', 'intelcorei5', 'intelcorei7', 'other']
        gpu_list = ['amd', 'intel', 'nvidia']
        
        def traverse_list(lst, value):
            return [1 if item == value else 0 for item in lst]
        
        feature_list.extend(traverse_list(company_list, company))
        feature_list.extend(traverse_list(typename_list, typename))
        feature_list.extend(traverse_list(opsys_list, opsys))
        feature_list.extend(traverse_list(cpu_list, cpu))
        feature_list.extend(traverse_list(gpu_list, gpu))

        pred_value = prediction(feature_list)
        pred_value = np.round(pred_value[0], 2) * 221

    return render_template('index.html', pred_value=pred_value)

# Route to serve the JavaScript file
@app.route('/interface.js')
def serve_js():
    root_dir = os.path.dirname(os.getcwd())
    return send_from_directory(os.path.join(root_dir, 'static'), 'interface.js', mimetype='text/javascript')

if __name__ == '__main__':
    app.run(debug=True)
