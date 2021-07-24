import React from 'react'

const Practice = React.memo(() => {
    const a=[1,2,3]
    console.log(a.__proto__)
    setTimeout(()=> console.log('setTimeout'),5000)
    fetch('https://randomuser.me/api/').then((message) => console.log(message))
    console.log('aamir')
    return (
        <>
        <h1>Aamir</h1>
            {/* <button class="m-20 text-white p-10 bg-green-500 active:bg-green-700 rounded">
                Click me
        </button>
            <div class=" m-20 w-auto inline-block group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent ...">
                <p class="text-indigo-600 group-hover:text-gray-900 ...">New Project</p>
                <p class="text-indigo-500 group-hover:text-gray-500 ...">Create a new project from a variety of starting templates.</p>
            </div> */}
        </>
    )
})
export default Practice
