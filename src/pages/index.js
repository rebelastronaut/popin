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
    <Groups BackgroundColors={["#62EDD6", "#FE65B7"]} text={["Saturday Group", "Tuesdays Art Group"]}/>
    <Events BackgroundColors={["#E9C904", "#8FC33A", "#62EDD6"]}/>
    <Groups BackgroundColors={["#E9C904","#8FC33A"]} text={["Join Us", "Donate"]}/>
  </Layout>
)

export default Index
