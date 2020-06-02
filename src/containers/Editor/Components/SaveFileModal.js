import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import FlatButton from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

class SaveFileModal extends PureComponent {
  static propTypes = {
    isSaving: PropTypes.bool,
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
    textValue: PropTypes.string
  }

  handleSave = () => {
    const name = this.inpitNode.value
    const textValue = this.props.textValue
    this.props.onSave(name, textValue)
    this.props.onCancel()
  }

  mockSubmit = e => {
    e.keyCode === 13 && this.handleSave()
  }

  render() {
    const { isSaving, onCancel } = this.props
    return (
      <div>
        <Dialog open={isSaving} aria-labelledby="form-dialog-title" >
        <DialogContent>
          <DialogContentText>文件名称</DialogContentText>
          <Input
            autoFocus
            margin="dense"
            id="name"
            type="text"
            fullWidth
            onKeyDown={(e) => this.mockSubmit(e)}
            inputRef={inpitNode => this.inpitNode = inpitNode}
          />
        </DialogContent>
        <DialogActions>
          <FlatButton color="primary" onClick={() => onCancel()}>
            取消
          </FlatButton>
          <FlatButton color="primary" onClick={() => this.handleSave()}>
            保存
          </FlatButton>
        </DialogActions>
      </Dialog>
      </div>
    )
  }
}

export default SaveFileModal
