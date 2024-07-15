/**
 * NextJS gives a way to automatically prepend various assets with your
 * Github's repository name, such as for .css files, but not for images
 * served out of the NextJS image component.
 * To work around this, the path needs to be prefixed manually.
 */
const imgPrefix = process.env.BASE_PATH || "";
export { imgPrefix };