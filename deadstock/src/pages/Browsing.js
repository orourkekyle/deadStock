// set up browsing (through external api's) components
import React, {Component} from "react";
import Navbar from "../components/Navbar";
// import browsing from "../components/browsing/browsing";
import YearAmountSelect from "../components/BrowsingComp/YearAmountSelect";
import BrandSelect from "../components/BrowsingComp/BrandSelect";
import GenderSelect from "../components/BrowsingComp/GenderSelect";
import ShoeTable from "../components/BrowsingComp/ShoeTable";
import Submit from "../components/BrowsingComp/SubmitButton/SubmitBtn"
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import Div from "../components/Div";
import ReactCard from "../components/ReactCard";
import { searchAPI, saveItem, recItems} from "../utils/API";


class Browsing extends Component{
        state = {
          searchTerm: '',
          itemList:[],
          itemData: {},
          savedItemIds: [],
          itemId: "",
          itemRec: [],
          currentChat: []
        }; 
      
        reRun = (title) => {
          this.setState({
            searchTerm: title
          }, this.mainSearch)
        }
      
        handleInputChange = event => {
          const { name, value } = event.target;
          this.setState({
            [name]: value
          });
        };
      
        handleFormSubmit = event => {
          event.preventDefault();
          this.mainSearch();
        }
      
        // Main function to search for a movie
        mainSearch = () => {
          searchTmdb(this.state.searchTerm)
            .then(({ data: itemData }) => {
              console.log(itemData);
              this.setState({
                itemData: {
                  title: itemData.results[0].title,
                  itemId: itemData.results[0].id,
                  plot: itemData.results[0].overview,
                  image: itemData.results[0].poster_path,
                  vote: itemData.results[0].vote_average
                }
              }, this.recSearch);
            })
            .catch(err => console.log(err));
            this.setState({searchTerm: ""})
        };
      
        
        recSearch = () => {
          console.log(this.state.itemData.itemId);
          recItem(this.state.itemData.itemId)
            .then(({ data: itemRec }) => {
              console.log(itemRec);
              this.setState({itemRec: itemRec.results
              })
            })
            .catch(err => console.log(err));
        };
      
        handleSaveItem = () => {
          console.log(this.state.itemData);
          // this.state.itemData 
          saveItem(this.state.itemData).then((res) => {
          }).catch(err => console.log(err))
        }
      
        render() {
          console.log(this.state)
          console.log(this.props)
          return (
            <React.Fragment>
              <Navigation 
              search
              handleInputChange={this.handleInputChange}
              searchTerm={this.state.searchTerm}
              mainSearch={this.mainSearch}
              />
              <div className="container-fluid">
      
                    <Row>
                      <Col className="text-center" md={6}>
                      {
                        !Object.keys(this.state.itemData).length ? "Search For A Movie To Begin" : (
                                <Card className="text-center" title={this.state.itemData.title} image={this.state.itemData.image} vote={this.state.itemData.vote} itemId={this.state.itemData.itemId}>
                                  <p>
                                    {this.state.itemData.plot}
                                  </p>
                                  <button 
                                    onClick={this.handleSaveItem}
                                    className="btn btn-success btn-sm">
                                    Save Movie
                                  </button>
                                </Card>
                        )
                      }
                      </Col>
                      <Col md={6}>
                        <Div>
                        <Row>
                          {
                            this.state.itemRec.map(item => (
                              <Col key={item.id} md={3}> 
                              <Reccard secondSearch reRun={this.reRun} className="text-center" title={item.title} image={item.poster_path} vote={item.vote_average} id={item.id}>
                                </Reccard>
                                </Col>
                            ))
                          }
                          </Row>
                        </Div>
                      </Col>
                    </Row>
              </div>
            </React.Fragment>
          );
        }
      }



// render() {
//      return (
//         <div>
//             <h1>Browsing</h1>
//                 <div className="search">
//                     {/* <Button id="hideButton" onClick="hideFunction()">Search</Button> */}
//                     {/* //Main Bootstrap Search */}
//                         <div className="container" id="myContainer">
//                             <form role="form">

   
//                         <YearAmountSelect />
//                         <BrandSelect />
//                         <GenderSelect />
//                         <Submit />
//                             {/* <!-- Here we have our final submit button --> */}
//               <             button type="submit" className="btn btn-default" id="run-search">
//                                 <i className="fa fa-search"></i> Search</button>
//                             <button className="btn btn-default" id="clear-all">
//                                 <i className="fa fa-trash"></i> Clear Results</button>
//                     </form>
//                 </div>
//             </div>

//             {/* <!-- section to display shoes in --> */}
//           <ShoeTable />
//         </div>
//     )

export default Browsing;