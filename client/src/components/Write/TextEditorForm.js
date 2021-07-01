import React, { Fragment, useState } from 'react';
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { writePost } from '../../actions/postActions'

export const PostContent = styled.div`
    position: relative;
    overflow: hidden;
    padding: 1rem;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 4rem;
    border-top: 2px solid #777272
`
const MyBlock = styled.div`
    .wrapper-class{
        width: 100%;
        margin: 0 auto;
        margin-bottom: 4rem;
    }
  .editor {
    height: 500px !important;
    border: 1px solid #f1f1f1 !important;
    padding: 5px !important;
    border-radius: 2px !important;
  }
`;
const SpaceBlock = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 1px;
  background: #dee2e6;
`;
const TestEditorForm = ({ history }) => {
  const dispatch = useDispatch()
  const [content, setContent] = useState({
    title: '',
    tags: '',
})

const getContent = (e) => {
  const { name, value } = e.target;
  setContent({
      ...content,
      [name] : value
  })
}
  // useState로 상태관리하기 초기값은 EditorState.createEmpty()
  // EditorState의 비어있는 ContentState 기본 구성으로 새 개체를 반환 => 이렇게 안하면 상태 값을 나중에 변경할 수 없음.
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    // editorState에 값 설정
    setEditorState(editorState);
  };
  
  const editorToHtml = draftToHtml(convertToRaw(editorState.getCurrentContent()));


  return (
    <Fragment>

<input className="input input-title" type="text" name="title" placeholder="제목" onChange={getContent}/>
<input className="input input-tags" type="text" name="tags" placeholder="태그" onChange={getContent}/>
    <MyBlock>
      <Editor
        // 에디터와 툴바 모두에 적용되는 클래스
        wrapperClassName="wrapper-class"
        // 에디터 주변에 적용된 클래스
        editorClassName="editor"
        // 툴바 주위에 적용된 클래스
        toolbarClassName="toolbar-class"
        // 툴바 설정
        toolbar={{
          // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
        }} 
        placeholder="내용을 작성해주세요."
        // 한국어 설정
        localization={{
          locale: 'ko',
        }}
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        
      />
    </MyBlock>
    <SpaceBlock/>

    <PostContent dangerouslySetInnerHTML={{__html: editorToHtml}}/>
    
    <button className="btn btn-post"
            onClick={() => {
              dispatch(writePost({ 
                title: content.title,
                tags: content.tags.split(','),
                html: editorToHtml,
                createdAt: new Date()
              }))
              alert('등록 완료!');
              history.push('/posts')
            }}>완료</button>
 
    </Fragment>

  );
};
export default withRouter(TestEditorForm);