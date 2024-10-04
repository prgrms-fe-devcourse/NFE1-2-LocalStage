import * as S from './styles';
import PaginationButton from '../PaginationButton';

interface PaginationButtonContainerProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

export const PaginationButtonContainer = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationButtonContainerProps) => {
  const renderPaginationButtons = () => {
    const buttons = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <PaginationButton key={i} pageNumber={i} currentPage={currentPage} onClickPaginationButton={onPageChange} />,
        );
      }
    } else {
      let startPage: number;
      let endPage: number;

      if (currentPage <= 3) {
        startPage = 1;
        endPage = 3;
      } else if (currentPage >= totalPages - 2) {
        startPage = totalPages - 2;
        endPage = totalPages;
      } else {
        startPage = currentPage - 1;
        endPage = currentPage + 1;
      }

      buttons.push(
        <PaginationButton key={1} pageNumber={1} currentPage={currentPage} onClickPaginationButton={onPageChange} />,
      );

      if (startPage > 2) {
        buttons.push(<span key="ellipsis-start">...</span>);
      }

      for (let i = startPage; i <= endPage; i++) {
        if (i !== 1 && i !== totalPages) {
          buttons.push(
            <PaginationButton
              key={i}
              pageNumber={i}
              currentPage={currentPage}
              onClickPaginationButton={onPageChange}
            />,
          );
        }
      }

      if (endPage < totalPages - 1) {
        buttons.push(<span key="ellipsis-end">...</span>);
      }

      buttons.push(
        <PaginationButton
          key={totalPages}
          pageNumber={totalPages}
          currentPage={currentPage}
          onClickPaginationButton={onPageChange}
        />,
      );
    }

    return buttons;
  };

  return <S.PaginationButtonContainer>{renderPaginationButtons()}</S.PaginationButtonContainer>;
};

export default PaginationButtonContainer;
