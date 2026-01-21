import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    icon,
    onClick,
    className = '',
    disabled = false,
    type = 'button',
    fullWidth = false,
}) => {
    const baseClasses = 'btn-bounce flex items-center justify-center gap-2 display-font font-semibold rounded-2xl shadow-chunky transition-all';

    const variantClasses = {
        primary: 'bg-primary text-white hover:brightness-105',
        secondary: 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600',
        accent: 'bg-accent-blue text-white hover:brightness-105',
    };

    const widthClass = fullWidth ? 'w-full' : '';
    const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${disabledClass} ${className}`}
        >
            {icon && <span className="material-symbols-rounded">{icon}</span>}
            {children}
        </button>
    );
};

export default Button;
