import { Icon, type IconName } from './Icons';

export function Sticker({ icon, color = 'cyan', size = 'medium', label }: { icon: IconName; color?: string; size?: 'small' | 'medium' | 'large'; label?: string }) {
  return (
    <div className={`sticker sticker-${color} sticker-${size}`} aria-hidden="true">
      <div className="sticker-shell"><Icon name={icon}/><i className="sticker-spark" /></div>
      {label && <span>{label}</span>}
    </div>
  );
}
