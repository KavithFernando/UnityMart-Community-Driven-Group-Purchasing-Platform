import './style.css';
import React, { useState } from 'react';

function LaptopPricePredictor() {
    const [formData, setFormData] = useState({
        ram: '',
        weight: '',
        company: '',
        typename: '',
        opsys: '',
        cpuname: '',
        gpuname: '',
        touchscreen: false,
        ips: false
    });

    const [predValue, setPredValue] = useState(0);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setPredValue(data.pred_value);
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <div className="wrapper">
            <div className="title">Laptop Price Predictor</div>
            <form onSubmit={handleSubmit}>
                <div className="form">
                    <div className="inputfield">
                        <label htmlFor="ram">Ram (GB)</label>
                        <input
                            className="input"
                            type="text"
                            name="ram"
                            value={formData.ram}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="inputfield">
                        <label htmlFor="weight">Weight (Kg)</label>
                        <input
                            className="input"
                            type="text"
                            name="weight"
                            value={formData.weight}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="inputfield">
                        <label htmlFor="company">Company</label>
                        <div className="custom_select">
                            <select
                                name="company"
                                id="company"
                                value={formData.company}
                                onChange={handleChange}
                                required
                            >
                                <option value="" selected hidden>Select</option>
                                <option value="acer">Acer</option>
                                <option value="apple">Apple</option>
                                <option value="asus">Asus</option>
                                <option value="dell">Dell</option>
                                <option value="hp">HP</option>
                                <option value="lenovo">Lenovo</option>
                                <option value="msi">MSI</option>
                                <option value="toshiba">Toshiba</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="inputfield">
                        <label htmlFor="typename">Type Name</label>
                        <div className="custom_select">
                            <select
                                name="typename"
                                id="typename"
                                value={formData.typename}
                                onChange={handleChange}
                                required
                            >
                                <option value="" selected hidden>Select</option>
                                <option value="2in1convertible">2 in 1 Convertible</option>
                                <option value="gaming">Gaming</option>
                                <option value="netbook">Net Book</option>
                                <option value="notebook">Note Book</option>
                                <option value="ultrabook">Ultra Book</option>
                                <option value="workstation">Workstation</option>
                            </select>
                        </div>
                    </div>

                    <div className="inputfield">
                        <label htmlFor="opsys">Operating System</label>
                        <div className="custom_select">
                            <select
                                name="opsys"
                                id="opsys"
                                value={formData.opsys}
                                onChange={handleChange}
                                required
                            >
                                <option value="" selected hidden>Select</option>
                                <option value="windows">Windows</option>
                                <option value="mac">Mac</option>
                                <option value="linux">Linux</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="inputfield">
                        <label htmlFor="cpuname">CPU</label>
                        <div className="custom_select">
                            <select
                                name="cpuname"
                                id="cpuname"
                                value={formData.cpuname}
                                onChange={handleChange}
                                required
                            >
                                <option value="" selected hidden>Select</option>
                                <option value="intelcorei3">Intel Core i3</option>
                                <option value="intelcorei5">Intel Core i5</option>
                                <option value="intelcorei7">Intel Core i7</option>
                                <option value="amd">AMD</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="inputfield">
                        <label htmlFor="gpuname">GPU</label>
                        <div className="custom_select">
                            <select
                                name="gpuname"
                                id="gpuname"
                                value={formData.gpuname}
                                onChange={handleChange}
                                required
                            >
                                <option value="" selected hidden>Select</option>
                                <option value="intel">Intel</option>
                                <option value="amd">AMD</option>
                                <option value="nvidia">Nvidia</option>
                                <option value="Arm">Arm</option>
                            </select>
                        </div>
                    </div>

                    <div className="check">
                        <div>
                            <label htmlFor="touchscreen">Touch Screen</label>
                            <input
                                type="checkbox"
                                name="touchscreen"
                                checked={formData.touchscreen}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="ips">IPS</label>
                            <input
                                type="checkbox"
                                name="ips"
                                checked={formData.ips}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="inputfield">
                        <input className="btn" type="submit" value="Predict Price" />
                    </div>
                </div>
            </form>

            <div className="result">
                {predValue !== 0 && <p>Estimated Price : LKR {predValue}</p>}
            </div>
        </div>
    );
}

export default LaptopPricePredictor;
