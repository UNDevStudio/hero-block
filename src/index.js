import { registerBlockType } from '@wordpress/blocks';
import {
	MediaUpload,
	MediaUploadCheck,
	RichText,
	URLInputButton,
} from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './style.css';

registerBlockType('hero-block/hero', {
	edit: ({ attributes, setAttributes }) => {
		const {
			imageUrl,
			imageId,
			title,
			subtitle,
			buttonText,
			buttonUrl,
		} = attributes;

		return (
			<div className="hero-block">
				<div className="hero-block__image">
					{imageUrl ? (
						<img src={imageUrl} alt="" />
					) : (
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) =>
									setAttributes({
										imageUrl: media.url,
										imageId: media.id,
									})
								}
								allowedTypes={['image']}
								value={imageId}
								render={({ open }) => (
									<Button variant="primary" onClick={open}>
										{__('Select Hero Image', 'hero-block')}
									</Button>
								)}
							/>
						</MediaUploadCheck>
					)}
				</div>

				<div className="hero-block__overlay">
					<RichText
						tagName="h2"
						value={title}
						onChange={(value) => setAttributes({ title: value })}
						placeholder={__('Hero Title', 'hero-block')}
					/>

					<RichText
						tagName="p"
						value={subtitle}
						onChange={(value) =>
							setAttributes({ subtitle: value })
						}
						placeholder={__('Hero Subtitle', 'hero-block')}
					/>

					<RichText
						tagName="span"
						value={buttonText}
						onChange={(value) =>
							setAttributes({ buttonText: value })
						}
						placeholder={__('Button Text', 'hero-block')}
					/>

					<URLInputButton
						url={buttonUrl}
						onChange={(url) =>
							setAttributes({ buttonUrl: url })
						}
					/>
				</div>
			</div>
		);
	},

	save: ({ attributes }) => {
		const {
			imageUrl,
			title,
			subtitle,
			buttonText,
			buttonUrl,
		} = attributes;

		return (
			<div className="hero-block">
				{imageUrl && (
					<img
						className="hero-block__background"
						src={imageUrl}
						alt=""
					/>
				)}

				<div className="hero-block__overlay">
					<RichText.Content
						tagName="h2"
						value={title}
					/>

					<RichText.Content
						tagName="p"
						value={subtitle}
					/>

					{buttonText && buttonUrl && (
						<a
							className="hero-block__button"
							href={buttonUrl}
						>
							{buttonText}
						</a>
					)}
				</div>
			</div>
		);
	},
});