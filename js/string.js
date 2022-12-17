function name(str){
	a=str
	count=""
	for(i=0;i<=str.length-1; i++)
	{
		if (a[i]!="a"&& a[i]!="e"&& a[i]!="i"&& a[i]!="o"&& a[i]!="u")
		{
			count+=a[i]
		}}
		return count
	}
	p=prompt("enter the string")
	q=name(p)
	console.log(q)
	