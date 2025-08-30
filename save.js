
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 */
import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { kaomoji = "" } = attributes;
	return (
		<div { ...useBlockProps.save() }>
			<span className="kaomoji-selector__output" style={{ fontSize: "2rem" }}>
				{ kaomoji }
			</span>
		</div>
	);
}
	