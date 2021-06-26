var ranks = 1;
var samples=[],speeds=[],avg=[],names=[];
	db.collection('users').orderBy("avgsum","desc").get().then((snapshot) => {
		var k=0;
		snapshot.docs.forEach(doc => { 
			names[k]=doc.data().name;
			samples[k]=doc.data().samplecount;
			 speeds[k]=doc.data().avgsum;
			 k+=1;
			//console.log(names[k-1],speeds[k-1],samples[k-1]);
		});
	for(var j=0;j<samples.length;j++){	
	var tbody = document.querySelector("#table-body");
	let tr = document.createElement('tr');
	let name = document.createElement('td');
	let rank = document.createElement('td');
	let speed = document.createElement('td'); 
	name.textContent = names[j];
	rank.textContent = ranks++;
	speed.textContent = speeds[j];
	tr.appendChild(name);
	tr.appendChild(rank);
	tr.appendChild(speed);
	tbody.appendChild(tr);
}
	});

//});

