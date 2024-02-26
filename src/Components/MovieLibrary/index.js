import { Button, ConfigProvider } from "antd";
import MlStyle from "./style";
import 'swiper/css';

const libraryGridItem = [ {
    poster:"https://cnbl-cdn.bamgrid.com/assets/8c630a19daa8615918152082839724f4dab6538939ba7d3bb45f8faa97acf1b9/original",
    title:"movies",
    type:"new and classic",
},
{
    poster:"https://cnbl-cdn.bamgrid.com/assets/82fd53644e709344c9e9c1f4ba66519505ecea256294d59a0637bda76ae1436b/original",
    title:"tv shows",
    type:"Past & Current Seasons",
},
{
    poster:"https://cnbl-cdn.bamgrid.com/assets/ac931afda56af56577495fd334556f6f834e00a32296b0e85834904f852e2beb/original",
    title:"Hulu Originals",
    type:"Groundbreaking",
},
{
    poster:"https://cnbl-cdn.bamgrid.com/assets/f3f84cde435747f424ce4ad52d351efc96b5da4765af2f76afa9b86fb5bc9a37/original",
    title:"premiums",
    type:"add-on",
},
]
function renderFarm() {
    return libraryGridItem.map((item, index)=>{
        return(
            <div className="col-6 library-item-wrapper relative" key={index}>
              <img src={item.poster} alt=""/>
              <div className="overlay absolute">
                <span className="white">{item.type}</span>
                <h3 className="white mt-2">{item.title}</h3>
              </div>

            </div>
        )
    })
}
export default function MovieLibrary(){
    return(
        <MlStyle className="space-section">
            <div className="wrapper">
                <div className="library-content center mb-7">
                    <span>included in all plans</span>
                    <h2>All The TV and Movies You Love</h2>
                    <p>Watch full seasons of exclusive streaming series, current-season episodes, hit movies, Hulu
                    Originals, kids shows, and more.</p>
                </div>
                <div className="library-grid mb-7">
                    <div className="library-item">
                        <button className="flex wrap">
                            {renderFarm()}
                        </button>
                    </div>
                </div>
                <ConfigProvider theme={{components: { Button:{contentLineHeight: 1},},}}>
                    <Button type="primary" size= "middle"> browse </Button>
                </ConfigProvider>    
            </div>
        </MlStyle>
    )
}