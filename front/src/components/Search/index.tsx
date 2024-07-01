import { View, TextInput, TextInputChangeEventData } from 'react-native';
import { SearchIcon } from '../Icon/svgIcons';
import COLORS from '@/styles/colors';

interface SearchInputProps {
  placeholder: string;
  onSearch?: (text: string) => void;
  className?: String;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  onSearch,
  className,
}) => {
  const handleSearch = (event: { nativeEvent: TextInputChangeEventData }) => {
    const text = event.nativeEvent.text.trim();
    if (text && onSearch) {
      onSearch(text);
    }
  };

  return (
    <View
      className={`flex-row w-full items-center justify-center px-6 bg-white
        rounded-xl gap-4 p-2 ${className}`}
    >
      <SearchIcon color={COLORS.lightGray} size={16} />
      <TextInput
        className={`flex-1 py-2 text-black`}
        placeholder={placeholder}
        placeholderTextColor={COLORS.lightGray}
        onChange={handleSearch}
      />
    </View>
  );
};

export default SearchInput;
