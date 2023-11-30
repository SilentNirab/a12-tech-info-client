import PropTypes from 'prop-types';
import { WithContext as ReactTags } from 'react-tag-input';

import './Tag.css';

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const Tags = ({ tags, setTags }) => {
  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    setTags(newTags);
  };

  const handleTagClick = (index) => {
    console.log('The tag at index ' + index + ' was clicked');
  };

  return (
    <div className='py-4 w-full'>
      <ReactTags
        tags={tags}
        delimiters={delimiters}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleDrag={handleDrag}
        handleTagClick={handleTagClick}
        inputFieldPosition="bottom"
        autocomplete
        editable
      />
    </div>
  );
};

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
  setTags: PropTypes.func.isRequired,
};

export default Tags;