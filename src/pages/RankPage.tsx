import { FilterButton } from '@/components/FilterButton';
import { useState } from 'react';
import styled from 'styled-components';

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export default function RankPage() {
  const [activeFilter, setActiveFilter] = useState<string>('일간');

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    console.log(`${filter} 필터가 선택되었습니다.`);
  };

  return (
    <div>
      <ButtonGroup>
        <FilterButton text="일간" $isActive={activeFilter === '일간'} onClick={() => handleFilterClick('일간')} />
        <FilterButton text="주간" $isActive={activeFilter === '주간'} onClick={() => handleFilterClick('주간')} />
        <FilterButton text="월간" $isActive={activeFilter === '월간'} onClick={() => handleFilterClick('월간')} />
      </ButtonGroup>
    </div>
  );
}
