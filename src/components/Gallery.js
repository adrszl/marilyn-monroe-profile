import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchGallery } from "../redux/actions";
import LoadingSpinner from './LoadingSpinner';
import './Gallery.scss';

class Gallery extends Component {
    componentDidMount() {
        this.props.dispatch(fetchGallery());
    }

    render() {
        const { errorMsg, loading, gallery } = this.props;
        let galleryRender = null;
        if(!loading) {
            galleryRender = gallery.map((item, index) => {
                if(index < 9) {
                    return(
                        <div className="row-item" key={`MarylinPhoto${index}`} title={item.title}>
                            <div className="photo-container">
                                <a href={item.link}>
                                    <img src={item.media.m} className="photo" alt="Marylin Monroe" />
                                </a>
                            </div>
                        </div>
                    );
                } else return null;
            })
        }
        return(
            <div className="gallery-container">
                {errorMsg ? <p>There was an error. Please try again...</p> : null}
                {loading ? <div className="spinner-container"><LoadingSpinner /></div> : galleryRender}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    gallery: state.gallery,
    loading: state.loading,
    errorMsg: state.errorMsg
});
  
export default connect(mapStateToProps)(Gallery);