function ststs (file){
   return new Promise((resolve,reject) => {
      fs.stat(file, (err, data) => {
		  if (err) {
			  return reject (err)
		  }
		  resolve(data)
	  })
   })
}
promise.all([
   stats('file1'),
   stats('file2'),
   stats('file3')
   ])
   .then((data) => console.log(data))
   .catch((err) => console.log(err))
   
