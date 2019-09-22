
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Clear, KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

class Lightbox extends Component {
    state = {
        showLightbox: false,
        selectedImage: 0,
    }

    componentDidMount = () => {
        window.addEventListener('keyup', this.handleKeyUp, false)
        this.targetElement = document.querySelector('#targetElementId');
    }

    componentWillUnmount = () => {
        window.removeEventListener('keyup', this.handleKeyUp, false)
        clearAllBodyScrollLocks();
    }

    handleClick = (e, index) => {
        e.preventDefault()
        this.setState({ showLightbox: !this.state.showLightbox, selectedImage: index })
        disableBodyScroll(this.targetElement);
    }

    closeModal = () => {
        this.setState({ showLightbox: false })
        enableBodyScroll(this.targetElement);
    }

    goBack = () => {
        if (this.state.selectedImage > 0) {
            this.setState({ selectedImage: this.state.selectedImage - 1 })
        }
    }

    goForward = () => {
        if (this.state.selectedImage < this.props.images.length - 1) {
            this.setState({ selectedImage: this.state.selectedImage + 1 })
        }
    }

    handleKeyUp = e => {
        e.preventDefault()
        const { keyCode } = e
        if (this.state.showLightbox) {
            if (keyCode === 37) {
                // Left Arrow Key
                if (this.state.selectedImage > 0) {
                    this.setState({ selectedImage: this.state.selectedImage - 1 })
                }
            }
            if (keyCode === 39) {
                // Right Arrow Key
                if (this.state.selectedImage < this.props.images.length - 1) {
                    this.setState({ selectedImage: this.state.selectedImage + 1 })
                }
            }
            if (keyCode === 27) {
                // Escape key
                this.setState({ showLightbox: false })
                enableBodyScroll(this.targetElement);
            }
        }
    }

    render() {
        const { images } = this.props
        const { showLightbox, selectedImage } = this.state
        return (
            <div>
                <Gallery>
                    {images.map((img, i) => (
                        <GalleryItem key={img.image.childImageSharp.id}>
                            <a href={img.image.childImageSharp.fluid.src} onClick={e => this.handleClick(e, i)}>
                                <Img fluid={img.image.childImageSharp.fluid} />
                            </a>
                        </GalleryItem>
                    ))}
                </Gallery>

                <LightboxModal visible={showLightbox} onKeyUp={e => this.handleKeyDown(e)}>
                    <LightboxContent>
                        <Img fluid={images[selectedImage].image.childImageSharp.fluid} />
                        <Controls>
                            <KeyboardArrowLeft onClick={this.goBack} disabled={selectedImage === 0} style={{ display: "block", color: "white", fontSize: "4em" }} />
                            <Clear onClick={this.closeModal} style={{ display: "block", color: "white", fontSize: "3em" }} />
                            <KeyboardArrowRight onClick={this.goForward} disabled={selectedImage === images.length - 1} style={{ display: "block", color: "white", fontSize: "4em"}} />
                        </Controls>
                    </LightboxContent>
                </LightboxModal>
            </div>
        )
    }
}

const Gallery = styled.div`
  width: 100%;
  min-height: 50px;
  border-radius: 20;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const GalleryItem = styled.div`
  padding: 10px;
  min-width: 85px;
  flex-shrink: 1;
  border-radius: 20;
`

const LightboxModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`
const LightboxContent = styled.div`
  margin: 30px;
  max-width: 1500px;
  width: 100%;
`

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`

Lightbox.propTypes = {
    images: PropTypes.array.isRequired,
}

export default Lightbox