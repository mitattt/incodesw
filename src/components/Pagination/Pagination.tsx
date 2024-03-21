import React from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {PALETTE} from '~theme';
import ArrowLeft from '../../assets/icons/left-arrow.svg';
import ArrowRight from '../../assets/icons/right-arrow.svg';
import {getStyles} from './styles.ts';

const ITEMS_PER_PAGE = 10;

type Props = {
  total: string;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const screenWidth = Dimensions.get('window').width;
export const Pagination: React.FC<Props> = ({
  total = '10',
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(Number(total) / ITEMS_PER_PAGE);
  const styles = getStyles(screenWidth);

  const renderPageNumbers = () => {
    const pageNumbers = [];

    const renderPageButton = (pageNumber: number, text: string | number) => {
      const isOnCurrentPage = currentPage === pageNumber;
      return (
        <TouchableOpacity
          key={pageNumber}
          style={[
            styles.page,
            {
              backgroundColor: isOnCurrentPage
                ? PALETTE.white
                : PALETTE.transparent,
            },
          ]}
          onPress={() => onPageChange(pageNumber)}>
          <Text
            style={[
              styles.text,
              {
                color: isOnCurrentPage ? PALETTE.black : PALETTE.gray,
              },
            ]}>
            {text}
          </Text>
        </TouchableOpacity>
      );
    };

    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(renderPageButton(i, i));
      }
    } else {
      pageNumbers.push(renderPageButton(1, 1));
      if (currentPage > 2) {
        pageNumbers.push(<Text key="ellipsis">...</Text>);
      }
      if (currentPage > 1 && currentPage < totalPages) {
        pageNumbers.push(renderPageButton(currentPage, currentPage));
      }
      if (currentPage < totalPages - 1) {
        pageNumbers.push(renderPageButton(currentPage + 1, currentPage + 1));
      }
      if (currentPage < totalPages - 2) {
        pageNumbers.push(<Text key="ellipsis2">...</Text>);
      }
      pageNumbers.push(renderPageButton(totalPages, totalPages));
    }

    return pageNumbers;
  };

  return (
    <View style={styles.container}>
      {currentPage > 1 && (
        <TouchableOpacity onPress={() => onPageChange(currentPage - 1)}>
          <ArrowLeft width={24} height={24} style={{color: PALETTE.gray}} />
        </TouchableOpacity>
      )}

      {renderPageNumbers()}

      {currentPage < totalPages && (
        <TouchableOpacity onPress={() => onPageChange(currentPage + 1)}>
          <ArrowRight width={24} height={24} style={{color: PALETTE.gray}} />
        </TouchableOpacity>
      )}
    </View>
  );
};
