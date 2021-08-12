
export const getData = async() => {
        
	try{
			
			const res = await fetch("https://api.github.com/users/alejandroBarua");
			const data = await res.json();
			return data;

	}catch(err){
		return "no found";
	}
}