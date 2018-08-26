import React, { PureComponent } from 'react'
import PropTypes                from 'prop-types'
import searchEngineApi          from '../searchEngineRank/searchEngineApi'

import FineUploaderTraditional from 'fine-uploader-wrappers'
import FileInput from 'react-fine-uploader'

import 'react-fine-uploader/gallery/gallery.css'

const uploader = new FineUploaderTraditional({
  options: searchEngineApi.fineUploaderOptions,
  multiple: false,
  accept: ['csv']
})

class CsvRankUploader extends PureComponent {
  render() {
    return (
      <div>
        Here you can upload your CSV file.
        <FileInput multiple={false} uploader={ uploader } >
          <span className="icon ion-upload">Choose Files</span>
       </FileInput>
      </div>
    );
  }
}

CsvRankUploader.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func
}

export default CsvRankUploader;