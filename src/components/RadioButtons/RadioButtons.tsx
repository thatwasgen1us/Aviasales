import React from 'react'
import classes from './RadioButtons.module.scss'
import { Flex, Radio } from 'antd';
import type { CheckboxGroupProps } from 'antd/es/checkbox';

const RadioButtons: React.FC = () => {
	const options: CheckboxGroupProps<string>['options'] = [
		{ label: 'Самый дешевый', value: 'Самый дешевый' },
		{ label: 'Самый быстрый', value: 'Самый быстрый' },
		{ label: 'Оптимальный', value: 'Оптимальный' },
	];

	return (
		<Flex vertical>
			<Radio.Group
				block
				options={options}
				defaultValue="Самый дешевый"
				optionType="button"
				buttonStyle="solid"
				size="large"
			/>
		</Flex>
	)
}

export default RadioButtons

