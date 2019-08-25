import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Groups from "../components/groups"
import Events from "../components/events"


const Index = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <Groups BackgroundColors={["#E9C904", "#8FC33A", "#62EDD6"]} path={"/groups/"}/>
    <Events BackgroundColors={["#E9C904", "#8FC33A", "#62EDD6"]} path={"/events/"}/>
    <Groups BackgroundColors={["#E9C904", "#8FC33A", "#62EDD6"]} path={"/static_pages/"} /> 
  </Layout>
)

export default Index
