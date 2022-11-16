var dhanushPromise = new Promise((res,notres)=>{
    res('hello it resloved')
    notres('not resolved')
})
dhanushPromise.catch((a)=>{console.log(a)})
dhanushPromise.then((a)=>{console.log(a)})