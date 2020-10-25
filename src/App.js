import React, { useState } from 'react'

function App() {

    const [info, setInfo] = useState({
      name: '',
      description: ''
    })

    // const info = {
    //     name: 'Top 10 Xianxia',
    //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    // }

    return (
        <div className="App">

            <div className='cont'>

                <div className='info'>
                    {
                        setInfo({
                            name: 'Top 10 Xianxia',
                            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' 
                        })
                    }
                    <h1 className='info_name'>{info.name}</h1>
                    <p className='info_description'>{info.description}</p>

                </div>

                <div className='tree'></div>

                <div className='formatted'></div>
               
            </div>

        </div>
    );
}

export default App;
