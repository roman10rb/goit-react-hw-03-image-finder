import Button from "components/Button/Button";
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallary from "./ImageGallery/ImageGallery";
import { Component } from "react";
import ImageFetch from "servise/pixabey-api";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";



 class App extends Component  {

   state = {
    name: '',
    images: [],
    page: 1,
     isLoading: false,
    showBtn: false,
     empty: false,
    bigImage: '',
   }
   

   
    componentDidUpdate(prevProps, prevState) {
        
      if (prevState.name !== this.state.name || prevState.page !== this.state.page) {
          
            this.setState({
               isLoading: true,
            })
        
        
              ImageFetch( this.state.name, this.state.page )
                .then(({ hits, totalHits }) => {
          if (hits.length === 0) {
            this.setState({ empty: true });
            toast.info('No images with this name')
            return;
          }
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            showBtn: this.state.page < Math.ceil(totalHits / 12),
          }));
        })
                .catch(error => console.log(error)).finally(this.setState({
                isLoading:false,
            }))
           
      }
    
   }
   


   clickImage = (url) => {
     this.setState({
       bigImage: url,
     })
   }
       
         
       
    handleSubmit = (name) => {
     this.setState({
    name,
    images: [],
    page: 1,
       isLoading: false,
       showBtn: false,
       empty: false,
      bigImage: '',
     })
   }

      buttonClick = () => {
        this.setState(prevState => ({
          page: prevState.page + 1,
        }))
        console.log(this.state)
   }
   
  
   
  
  

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.isLoading && <Loader />}
        <ToastContainer autoClose={1000}/>
        {this.state.bigImage !== '' && <Modal url={this.state.bigImage} onClose={this.clickImage} />}
        <ImageGallary name={this.state.images} onClick={this.clickImage} />
        {this.state.showBtn && <Button onClick={this.buttonClick} /> }
      </>
    
    )
  }
};

export default App;