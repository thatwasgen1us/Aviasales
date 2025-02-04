import type { RadioChangeEvent } from 'antd';
import { Flex, Radio } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSort } from '../../redux/reducers/sortingSlice';
import type { RootState } from '../../redux/store';

const RadioButtons: React.FC = () => {
	const dispatch = useDispatch();
	const selectedSort = useSelector((state: RootState) => state.sorting.selectedSort);

	const options = [
		{ label: 'Самый дешевый', value: 'Самый дешевый' },
		{ label: 'Самый быстрый', value: 'Самый быстрый' },
		{ label: 'Оптимальный', value: 'Оптимальный' },
	];

	const handleChange = (e: RadioChangeEvent) => {
		dispatch(setSelectedSort(e.target.value));
	};

	return (
		<Flex vertical>
			<Radio.Group
				block
				options={options}
				value={selectedSort}
				optionType="button"
				buttonStyle="solid"
				size="large"
				onChange={handleChange}
			/>
		</Flex>
	)
}

export default RadioButtons

