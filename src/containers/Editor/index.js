import React, { Component } from 'react'

import Wrapper from './styled/Wrapper'
import AutoSizeTextarea from './styled/Textarea'
import EditorPanel from './Components/EditorPanel'
import SaveFileModal from "./Components/SaveFileModal"
import BrowseFileModal from "./Components/BrowseFileModal"

// Tool
import debounce from "lodash/debounce"
import marked from "marked"
import classNames from "classnames"

class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textValue: `# 欢迎      
        
希望您有畅快的体验

Markdown:
- 切换编辑模式 / 阅读模式
- 保存到浏览器
- 保存到本地`,
      isSaving: false,
      isBrowsing: false,
      savedFiles: {}
    }
    this.onChange = debounce(this.onChange, 500)
  }
  componentWillMount() {
    this.loadLocalFiles()
  }

  componentDidMount() {
    this.fillTextFromLocal()
    this.setState(() => {
      return {
        textValue: this.textarea.value
      }
    })
  }
  loadLocalFiles = () => {
    let localSavedFiles = {}
    for (let name in localStorage) {
        if (name.indexOf("MDE-") > -1) {
        localSavedFiles[name] = localStorage.getItem(name)
      }
    }
    this.setState(() => {
      return {
        savedFiles: localSavedFiles
      }
    })
  }
  loadLocal = () => {
    return localStorage.getItem("currentText")
  }

  fillTextFromLocal = () => {
    this.textarea.value = this.loadLocal()
      ? this.loadLocal()
      : this.state.textValue
  }

  setTextFromFileName = filename => {
    this.textValue = localStorage.getItem(filename)
    localStorage.setItem("currentText", this.textValue)
    this.setState(() => {
      return {
        textValue: this.textValue
      }
    })
  }
  onChange = () => {
    const result = this.textarea.value
    localStorage.setItem("currentText", result)
    this.setState(() => {
      return {
        textValue: result
      }
    })
  }
  mockSave = e => {
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 83) {
      e.preventDefault()
      this.toggleisSaving()
    }
  }
  toggleisSaving = () => {
    this.setState(() => {
      return {
        isSaving: !this.state.isSaving
      }
    })
  }

  togglePreview = () => {
    this.setState(() => {
      return {
        isPreview: !this.state.isPreview
      }
    })
  }

  toggleBrowse = () => {
    this.setState(() => {
      return {
        isBrowsing: !this.state.isBrowsing
      }
    })
  }

  saveNewFile = (name, textValue) => {
    this.toggleisSaving()
    let finalName = 'MDE-' + name
    localStorage.setItem(finalName, textValue)
    this.setState(() => {
      let tempObject = this.state.savedFiles
      tempObject[finalName] = textValue
      return {
        savedFiles: Object.assign(this.state.savedFiles, tempObject)
      }
    })
    return {
      name: finalName,
      textValue: textValue
    }
  }
  removeFile = fileName => {
    localStorage.removeItem(fileName)
    const newSavedFiles = this.state.savedFiles
    delete newSavedFiles[fileName]
    this.setState(() => {
      return {
        savedFiles: newSavedFiles
      }
    })
    // this.renderBrows(this.state.isBrowsing, this.state.savedFiles)
    this.toggleBrowse()
    return {
      name: fileName
    }
  }
  render() {
    const { textValue, isPreview, isBrowsing, isSaving, savedFiles } = this.state
    const markdownCls = classNames({
      "hidden-toggle": isPreview || isBrowsing,
      markdown: true
    })
    const previewCls = classNames({
      "hidden-toggle": !isPreview,
      markdown: true
    })
    return (
      <Wrapper>
        <AutoSizeTextarea
          className={markdownCls}
          ref={node => (this.textarea = node)}
          onChange={this.onChange}
          onKeyDown={this.mockSave}
          defaultValue={textValue}
        />
        <div
          className={previewCls}
          dangerouslySetInnerHTML={{
            __html: marked(textValue)
          }}
        />

        <EditorPanel
          togglePreview={this.togglePreview}
          toggleSaveFile={this.toggleisSaving}
          toggleBrowse={this.toggleBrowse}
          isBrowsing={isBrowsing}
          isPreview={isPreview}
          isSaving={isSaving}
        />
        <SaveFileModal
          isSaving={isSaving}
          onSave={this.saveNewFile}
          onCancel={this.toggleisSaving}
          textValue={textValue}
        />
        <BrowseFileModal
          isBrowsing={isBrowsing}
          toggleBrowse={this.toggleBrowse}
          savedFiles={savedFiles}
          openFile={this.setTextFromFileName}
          removeFile={this.removeFile}
          onCancel={this.toggleBrowse}
        />
      </Wrapper>
    )
  }
}

export default Editor