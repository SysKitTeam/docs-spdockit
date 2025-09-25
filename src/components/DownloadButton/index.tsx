import React from 'react';
import styles from './styles.module.css';

interface DownloadButtonProps {
  href: string;
  filename: string;
  fileSize: string;
  fileType: string;
  description?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  href,
  filename,
  fileSize,
  fileType,
  description
}) => {
  // Get display name for file type
  const getFileTypeDisplay = (type: string) => {
    const lowerType = type.toLowerCase();
    if (lowerType.includes('zip') || lowerType.includes('7z')) {
      return 'Archive';
    }
    return type;
  };

  // Get file icon based on file type (outline icons)
  const getFileIcon = (type: string) => {
    const lowerType = type.toLowerCase();
    if (lowerType.includes('zip') || lowerType.includes('7z')) {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="3" width="16" height="18" rx="2" ry="2"/>
          <line x1="9" y1="9" x2="15" y2="9"/>
          <line x1="9" y1="13" x2="15" y2="13"/>
          <line x1="9" y1="17" x2="15" y2="17"/>
        </svg>
      );
    } else if (lowerType.includes('pdf')) {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
        </svg>
      );
    } else if (lowerType.includes('doc') || lowerType.includes('docx')) {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
          <line x1="8" y1="13" x2="16" y2="13"/>
          <line x1="8" y1="17" x2="16" y2="17"/>
        </svg>
      );
    } else if (lowerType.includes('xls') || lowerType.includes('xlsx')) {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
          <rect x="8" y="12" width="8" height="2"/>
          <rect x="8" y="16" width="8" height="2"/>
        </svg>
      );
    } else if (lowerType.includes('ppt') || lowerType.includes('pptx')) {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
          <circle cx="12" cy="15" r="3"/>
        </svg>
      );
    } else if (lowerType.includes('ps1') || lowerType.includes('powershell')) {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="16" rx="2"/>
          <path d="m7 10 2 2-2 2"/>
          <path d="m13 16 4 0"/>
        </svg>
      );
    } else {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
        </svg>
      );
    }
  };

  return (
    <div className={styles['download-button-container']}>
      <a 
        href={href} 
        className={styles['download-button']}
        download={filename}
      >
        <div className={styles['download-button-content']}>
          <div className={styles['file-icon-section']}>
            <div className={styles['file-icon']}>
              {getFileIcon(fileType)}
            </div>
            <div className={styles['file-size']}>{fileSize}</div>
          </div>
          <div className={styles['separator']}></div>
          <div className={styles['file-info']}>
            <div className={styles['file-name']}>{filename}</div>
            <div className={styles['file-type']}>{getFileTypeDisplay(fileType)}</div>
          </div>
          <div className={styles['download-icon']}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7,10 12,15 17,10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
};

export default DownloadButton;
