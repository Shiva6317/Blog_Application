
async function fetchdata() {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();

    return data.products;

}


export default async function Product() {

    let products = await fetchdata();
    // console.log(products);

    return (
        <div>
            <h3>Server Side fetching data Project </h3>

            {
                products.map((items) => (
                    <div>
                        <span>{items.id} -</span>
                        <span>  {items.title}</span>
                        <span>===</span>
                        <span>  {items.description}</span>



                    </div>
                ))
            }
        </div>
    )
}