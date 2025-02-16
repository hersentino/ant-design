import InternalAnchor from './Anchor';
import AnchorLink from './AnchorLink';

export type { AnchorProps } from './Anchor';
export type { AnchorLinkProps } from './AnchorLink';

type InternalAnchorType = typeof InternalAnchor;

interface AnchorInterface extends InternalAnchorType {
  Link: typeof AnchorLink;
}

const Anchor = InternalAnchor as AnchorInterface;

Anchor.Link = AnchorLink;
export default Anchor;
