import * as React from 'react';

class Home extends React.Component {

    constructor() {
        super();
        this.state = { name: parseInt(Math.random() * 100).toString() };
    }

    render() {
        const getAddress = () => {
            this.setState({ name: parseInt(Math.random() * 100).toString() })
        }

        return(
            <div className='bg-emerald-600 px-16 py-8 m-4 rounded-xl flex items-center flex-col'>
                <h1 className='text-4xl text-white font-extrabold'>{ this.state.name }</h1>
                <button 
                    className='bg-emerald-300 text-white m-4 px-6 py-3 rounded-lg font-extrabold hover:bg-emerald-500' 
                    onClick={getAddress}>
                    Get
                </button>
                <button 
                    className='bg-emerald-300 text-white m-4 px-6 py-3 rounded-lg font-extrabold hover:bg-emerald-500' 
                    onClick={() => {  }}>
                    Force
                </button>
            </div>
        );
    }
}

export default Home;