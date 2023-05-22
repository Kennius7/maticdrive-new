import { Component } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';



class EditorContainer extends Component {

    constructor(props) {
        super(props);
        this.state = ({ editorState: EditorState.createEmpty() })
    }

componentDidMount () {
    this.onEditorStateChange()
}

    onEditorStateChange = (editorState) => {
        this.setState({ editorState });
        console.log(editorState);
    }


    render() {
        const { editorState } = this.state;

        return (
            <div>
                <div className="text-center editor">
                    <Editor
                        editorState={editorState}
                        onEditorStateChange={this.onEditorStateChange}
                        toolbar={{
                            inline: { inDropdown: true },
                            list: { inDropdown: true },
                            textAlign: { inDropdown: true },
                            link: { inDropdown: true },
                            history: { inDropdown: true },
                            // image: { uploadCallback: uploadImageCallback, alt: { present: true, mandatory: true } }
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default EditorContainer