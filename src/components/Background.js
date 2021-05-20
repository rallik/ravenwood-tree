import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const getBackground = graphql`
    query Background {
        h: file(relativePath: {eq: "background-h.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1260) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        v: file(relativePath: {eq: "background-v.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1260) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `


const BackgroundSection = () => {
  
    // Set ImageData.
    const background = useStaticQuery(getBackground)
    console.log(background)
    const backgroundData = background.h.childImageSharp.fluid

    return (
        <BackgroundImage
            Tag="section"
            className="background"
            fluid={backgroundData}
            preserveStackingContext={true}
        >
        </BackgroundImage>
    )
    }

export default BackgroundSection