// Workaround ReadTheDocs bug where the index has a title of "None"
// Seems to be caused by this change upstream in mkdocs https://github.com/mkdocs/mkdocs/pull/299
// Didn't have the time to find the relevant file to change in RTD, hence this hack.
if(window.document.title === "None") {
  window.document.title = "GovHack Hacker Toolkit";
}
