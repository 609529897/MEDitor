import React, { PureComponent } from "react"
import PropTypes from "prop-types"

import FileList from "./fileList"
import Dialog from '@material-ui/core/Dialog'
import Button from "@material-ui/core/Button"
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

class BrowseFileModal extends PureComponent {
  static propTypes = {
    isBrowsing: PropTypes.bool,
    toggleBrowse: PropTypes.func,
    savedFiles: PropTypes.object,
    loadLocalFiles: PropTypes.func,
    openFile: PropTypes.func,
    removeFile: PropTypes.func
  };

  render() {
    const {
      isBrowsing,
      toggleBrowse,
      savedFiles,
      openFile,
      removeFile,
      onCancel
    } = this.props;

    return (
      <div>
        {/* <Dialog
          title="File List"
          actions={actions}
          modal={false}
          open={isBrowsing}
          autoScrollBodyContent
          contentStyle={{
            width: "50vw"
          }}
          bodyStyle={{
            display: "flex",
            justifyContent: "center"
          }}
          titleStyle={{
            fontWeight: "300"
          }}
        >
          {Object.keys(savedFiles).length
            ? <FileList
                savedFiles={savedFiles}
                openFile={openFile}
                toggleBrowse={toggleBrowse}
                removeFile={removeFile}
              />
            : <span>You haven't saved any file yet :)</span>}
        </Dialog> */}
        <Dialog
          open={isBrowsing}
          // onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          {/* <DialogTitle id="alert-dialog-title">文件列表</DialogTitle> */}
          <DialogContent>
          <DialogContentText>文件名称</DialogContentText>
            {Object.keys(savedFiles).length
              ? <FileList
                savedFiles={savedFiles}
                openFile={openFile}
                toggleBrowse={toggleBrowse}
                removeFile={removeFile}
              />
              : <span>您的列表为空，您可以添加内容后再下载！</span>}
            <DialogContentText id="alert-dialog-description" />
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={() => onCancel()}>
              取消
          </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default BrowseFileModal;
