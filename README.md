# [Google Clone](https://google-clone-master.netlify.app/)

# What's in it?
- This clone is just like the original Google where u can search for anything & yall will get the results. 
- Search page to results instantly without refresh. This is powered by React Router. 

# Tech Stacks Used
- Context Api(Redux)
- Material UI for icons diaplayed over the app.
- React Router 
- Google's custom search API

## Use the package manager [npm](https://www.npmjs.com/) to install
```
npm install react-router-dom
npm install @material-ui/core
npm install @material-ui/icons
```
## Google Custom Search
```javascript
const UseGoogleSearch = (term) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
                .then(response => response.json())
                .then(result => {
                    setData(result)
                })
        }
        fetchData().then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        });
    }, [term]);

    return {data};
};
````
