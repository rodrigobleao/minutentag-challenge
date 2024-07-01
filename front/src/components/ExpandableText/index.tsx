import React, { useState } from 'react';
import { View, Pressable } from 'react-native';
import Typography from '../Typography';

const ExpandableText = ({ text }: { text: string }) => {
  const [expanded, setExpanded] = useState(false);
  const maxCharacters = 180;

  const breakIndex = text.lastIndexOf(' ', maxCharacters);
  const truncatedText = text.slice(0, breakIndex);
  const isTextShrinkable = text.length > truncatedText.length * 1.2;

  return (
    <View>
      <Typography
        fontSize="16"
        fontWeight="400"
        className="leading-6 text-justify text-darkGray"
      >
        {expanded || !isTextShrinkable ? text + '  ' : truncatedText + '...  '}
        {isTextShrinkable && (
          <Pressable onPress={() => setExpanded((prev) => !prev)}>
            <Typography
              fontSize="16"
              fontWeight="500"
              className="text-primary h-5"
            >
              Read {expanded ? 'less' : 'more'}
            </Typography>
          </Pressable>
        )}
      </Typography>
    </View>
  );
};

export default ExpandableText;
