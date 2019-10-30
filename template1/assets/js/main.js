renderCard = () => {
    let htmlDOM = ""
    const content = [
        {
            title : "Azure Lane",
            image : "./images/gambar1.jpg"       
        },
        {
            title : "Wallpaper Loli",
            image : "./images/gambar2.png"       
        },
        {
            title : "Azure Lane",
            image : "./images/gambar3.png"       
        },
        {
            title : "Azure Lane",
            image : "./images/gambar4.png"      
        }
        ];

        content.forEach((content) =>  {
            htmlDOM += "<div class='post-card'><div class='post-img' style='position:relative'><img src='"+content.image+"' /><div class='post-title'><h1>"+content.title+"</h1></div></div></div>"
            // console.log(content)
        })
        
        //Object Array
        // content.map((content, index) => {
        //     console.log(content)
        // return(
        //     htmlDOM += "<div key='"+index+"' class='post-card'><div class='post-img' style='position:relative'><img src='"+content.image+"' /><div class='post-title'><h1>"+content.title+"</h1></div></div></div>"
        // )})

        // for(var i =0 ; i<content.length; i++){
        //     htmlDOM += "<div class='post-card'><div class='post-img' style='position:relative'><img src='"+content[i].image+"' /><div class='post-title'><h1>"+content[i].title+"</h1></div></div></div>"
        // }

        document.getElementById('renderCard').innerHTML = htmlDOM;
}
 renderCardlist = () =>{
    var postDOM = ""
    const post = [
        {
            title : "Azure Lane",
            image : "./images/gambar1.jpg", 
            date : "26-oktober-2019"      
        },
        {
            title : "Wallpaper Loli",
            image : "./images/gambar2.png",
            date : "26-oktober-2019"       
        },
        {
            title : "Azure Lane",
            image : "./images/gambar3.png",
            date : "26-oktober-2019"       
        },
        {
            title : "Azure Lane",
            image : "./images/gambar4.png",
            date : "26-oktober-2019"      
        }
        ];
    post.forEach((post) => {
        postDOM += "<div id='recent'class='right-item'> <div class='row'> <div class='item-post'> <div class='row'> <div class='post-img'> <div class='item-img'> <img src='"+post.image+"'/> </div></div><div class='post-content'> <div class='item-content'> <div class='item-title'> <a href='#'>"+post.title+"</a> </div><div class='item-date'> <i class='fa fa-calendar'><span class='date'>26-October-2019</span></i> </div></div></div></div></div></div></div>"
    })
    document.getElementById('renderCardlist').innerHTML = postDOM;

}
(function() {
    //mengexecute script ketika pertama kali di load
    renderCard()
    renderCardlist()
})();