import React, { PureComponent } from "react"
/** Tools */
import PropTypes from "prop-types"
import styled from "styled-components"

import LI from "../styled/LI"
import deleteBtn from "@material-ui/icons/Delete"
import Download from "@material-ui/icons/Archive"

const Delete = styled(deleteBtn)`
  align-items: flex-end
`

class FileItem extends PureComponent {
  static propTypes = {
    fileName: PropTypes.string,
    content: PropTypes.string,
    openFile: PropTypes.func,
    toggleBrowse: PropTypes.func,
    removeFile: PropTypes.func
  }
  destroyClickedElement = event => {
    document.body.removeChild(event.target)
  }

  saveTextAsFile = (text, filename) => {
    var textFileAsBlob = new Blob([text], { type: "text/plain" })
    var downloadLink = document.createElement("a")
    downloadLink.download = filename + ".md"
    downloadLink.innerHTML = "Download File"
    if (window.webkitURL != null) {
      // Chrome allows the link to be clicked
      // without actually adding it to the DOM.
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob)
    } else {
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob)
      downloadLink.onclick = this.destroyClickedElement
      downloadLink.style.display = "none"
      document.body.appendChild(downloadLink)
    }
    downloadLink.click()
  }

  downloadFile = () => {
    this.saveTextAsFile(this.props.content, this.props.fileName)
  }

  render() {
    const { fileName, openFile, toggleBrowse, removeFile } = this.props

    return (
      <LI>
        <span
          onClick={() => {
            openFile(fileName)
            toggleBrowse()
          }}
        >
          {fileName}
        </span>
        <Delete onClick={() => removeFile(fileName)} />
        <Download onClick={this.downloadFile} />
      </LI>
    )
  }
}

export default FileItem
