// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import globalSettings from "./documents/globalSettings";
import globalNavigation from "./documents/globalNavigation";
import page from "./documents/page";
import blogs from "./documents/blogs";

import pageBuilder from "./objects/pageBuilder";
import pageBuilderText from "./objects/pageBuilderText";
import pageBuilderIntro from "./objects/pageBuilderIntro";
import pageBuilderBlogList from "./objects/pageBuilderBlogList";
import pageBuilderLogoGrid from "./objects/pageBuilderLogoGrid";
import portableText from "./objects/portableText";
import mainImage from "./objects/mainImage";
import navigationLink from "./objects/navigationLink";
import seo from "./objects/seo";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    globalSettings,
    globalNavigation,
    page,
    blogs,
    pageBuilder,
    pageBuilderText,
    pageBuilderIntro,
    pageBuilderBlogList,
    pageBuilderLogoGrid,
    portableText,
    mainImage,
    navigationLink,
    seo,
  ]),
});
