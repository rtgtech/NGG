import React from 'react';

const Input = ({
    label,
    icon,
    helperText,
    value,
    onChange,
    type = 'number',
    id,
    placeholder = '',
    colorVariant = 'blue',
}) => {
    const colorClasses = {
        blue: 'border-accent-blue/20 bg-blue-50/50 focus:border-accent-blue',
        green: 'border-accent-green/20 bg-green-50/50 focus:border-accent-green',
        yellow: 'border-accent-yellow/20 bg-yellow-50/50 focus:border-accent-yellow',
    };

    const iconColors = {
        blue: 'text-accent-blue',
        green: 'text-accent-green',
        yellow: 'text-accent-yellow',
    };

    return (
        <div className="space-y-2">
            {label && (
                <label
                    className="display-font text-xl text-slate-700 dark:text-slate-200 flex items-center gap-2"
                    htmlFor={id}
                >
                    {icon && <span className={`material-symbols-rounded ${iconColors[colorVariant]}`}>{icon}</span>}
                    {label}
                </label>
            )}
            <div className="relative">
                <input
                    type={type}
                    id={id}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`w-full h-16 px-6 text-2xl font-bold rounded-2xl border-4 ${colorClasses[colorVariant]} dark:bg-slate-800 dark:border-slate-600 dark:text-white focus:ring-0 transition-all shadow-inner-soft`}
                />
            </div>
            {helperText && (
                <p className="text-sm text-slate-400 dark:text-slate-500 pl-2">{helperText}</p>
            )}
        </div>
    );
};

export default Input;
