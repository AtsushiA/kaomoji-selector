
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';

const KAOMOJIS = [
	"(´・ω・`)",
	"(｡･ω･｡)",
	"(＾▽＾)",
	"(；´∀｀)",
	"(｀・ω・´)",
	"( ´∀｀)",
	"(￣ー￣)",
	"(*´ω｀*)",
	"＼(^o^)／",
	"(T_T)",
	"(^_^;)",
	"(╯°□°）╯︵ ┻━┻",
	"(・∀・)",
	"(´Д｀)",
	"(¬_¬)",
	"(ﾟ∀ﾟ)",
	"( ˘ω˘ )",
	"٩( 'ω' )و",
	"(￣^￣)ゞ",
	"(⌒▽⌒)",
];

export default function Edit( { attributes, setAttributes, isSelected } ) {
	const { kaomoji = "" } = attributes;

	useEffect(() => {
		// Set default if not set
		if (!kaomoji && KAOMOJIS.length > 0) {
			setAttributes( { kaomoji: KAOMOJIS[0] } );
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleSelect = (emoji) => {
		setAttributes( { kaomoji: emoji } );
	};

	return (
		<div { ...useBlockProps() }>
			<div className="kaomoji-selector__current" style={{ fontSize: "2rem", marginBottom: ".5em" }}>
				{ kaomoji ? kaomoji : __( "顔文字を選択してください", "kaomoji-selector-block-wp" ) }
			</div>
			<div className="kaomoji-selector__list" style={{ display: "flex", flexWrap: "wrap", gap: ".2em" }}>
				{ KAOMOJIS.map( (item) => (
					<button
						type="button"
						key={item}
						onClick={ () => handleSelect(item) }
						aria-pressed={ kaomoji === item }
						className={ "kaomoji-selector__button" + (kaomoji === item ? " is-selected" : "" ) }
						style={{
							padding: "0.2em 0.5em",
							fontSize: "1.3em",
							border: kaomoji === item ? "2px solid #21759b" : "1px solid #ddd",
							borderRadius: "3px",
							cursor: "pointer",
							background: kaomoji === item ? "#eaf6fb" : "#fff",
							transition: "border .15s"
						}}
					>{item}</button>
				))}
			</div>
		</div>
	);
}
	