import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaHome, FaUsers, FaBox, FaPlus, FaDollarSign, FaBolt, FaChevronDown,
  FaChevronRight, FaShoppingBag, FaWallet, FaCreditCard, FaBook, FaCogs,
  FaWhatsapp, FaSync, FaBackspace, FaBars, FaTimes
} from 'react-icons/fa';

const menuItems = [
  { to: '/home', icon: <FaHome className="me-3" />, label: 'Home' },
  { to: '/parties', icon: <FaUsers className="me-3" />, label: 'Parties' },
  { to: '/items', icon: <FaBox className="me-3" />, label: 'Items' },
  {
    label: 'Sale',
    icon: <FaBox className="me-3" />,
    subMenu: [
      { to: '/saleinvoices', icon: <FaPlus />, label: 'Sale Invoices' },
      { to: '/estimatequotation', icon: <FaPlus />, label: 'Estimate/Quotation' },
      { to: '/payment', icon: <FaPlus />, label: 'Payment In' },
      { to: '/saleorder', icon: <FaPlus />, label: 'Sale Order' },
      { to: '/deliverychallan', icon: <FaPlus />, label: 'Delivery Challan' },
      { to: '/salereturn', icon: <FaPlus />, label: 'Sale Return/Cr.Note' },
    ]
  },
  {
    label: 'Purchase',
    icon: <FaShoppingBag className="me-3" />,
    subMenu: [
      { to: '/purchaseorders', icon: <FaPlus />, label: 'Purchase Bills' },
      { to: '/purchasereturns', icon: <FaPlus />, label: 'Payment Out' },
      { to: '/purchaseorder', icon: <FaPlus />, label: 'Purchase Order' },
      { to: '/purchasereturn', icon: <FaPlus />, label: 'Purchase Return/Dr.Note' },
    ]
  },
  { to: '/quickbilling', icon: <FaBolt className="me-3" />, label: 'Quick Billing' },
  { to: '/expenses', icon: <FaWallet className="me-3" />, label: 'Expenses' },
  {
    label: 'Cash & Bank',
    icon: <FaDollarSign className="me-3" />,
    subMenu: [
      { to: '/bank-accounts', icon: <FaPlus className="" />, label: 'Bank Accounts' },
      { to: '/cash-in-hand', icon: <FaPlus className="" />, label: 'Cash In Hand' },
      { to: '/cheques', icon: <FaPlus className="" />, label: 'Cheques' },
      { to: '/loan-accounts', icon: <FaPlus className="" />, label: 'Loan Accounts' },
    ]
  },
  { to: '/myonlinestore', icon: <FaShoppingBag className="me-3" />, label: 'My Online Store' },
  { to: '/reports', icon: <FaBook className="me-3" />, label: 'Reports' },
  { to: '/apply-for-loan', icon: <FaCreditCard className="me-3" />, label: 'Apply For Loan' },
  { to: '/other-products', icon: <FaBox className="me-3" />, label: 'Other Products' },
  { to: '/whatsapp-making', icon: <FaWhatsapp className="me-3" />, label: 'WhatsApp Making' },
  { to: '/sync-share', icon: <FaSync className="me-3" />, label: 'Sync & Share' },
  { to: '/backuprestore', icon: <FaBackspace className="me-3" />, label: 'Backup/Restore' },
  { to: '/utilities', icon: <FaCogs className="me-3" />, label: 'Utilities' },
  { to: '/settings', icon: <FaCogs className="me-3" />, label: 'Settings' },
];



  const Menubar = ({ sidebarOpen, handleSidebarToggle }) => {
    const [openSubMenu, setOpenSubMenu] = useState({});
    const navigate = useNavigate();

    const handleSubMenuToggle = (label) => {
      setOpenSubMenu((prev) => ({ ...prev, [label]: !prev[label] }));
    };

    const handleItemClick = (to) => {
      navigate(to);
      handleSidebarToggle(); // Close the sidebar
    };

  return (
    <>
      <div>
        {/* Mobile menu */}
        <div className="d-lg-none">
          {sidebarOpen && (
            <div className={`bg-dark text-white ${sidebarOpen ? 'd-block' : 'd-none'}`} style={{ minHeight: '100vh', width: '250px', overflowY: 'auto' }}>
              
              <div>
                <h3 className='px-3'>Pavitrasoft</h3>
                <ul className="nav flex-column">
                  {menuItems.map((item, index) => (
                    <li key={index} className="nav-item">
                      {!item.subMenu ? (
                        <div className="nav-link text-white d-flex align-items-center cursor-pointer" onClick={() => handleItemClick(item.to)}>
                          {item.icon} {item.label}
                        </div>
                      ) : (
                        <React.Fragment>
                          <div
                            className="nav-link text-white d-flex justify-content-between align-items-center"
                            onClick={() => handleSubMenuToggle(item.label)}
                            style={{ cursor: 'pointer' }}
                          >
                            <div className="d-flex align-items-center">
                              {item.icon} {item.label}
                            </div>
                            <div className="d-flex align-items-center cursor-pointer">
                              {openSubMenu[item.label] ? <FaChevronDown className="ms-2" /> : <FaChevronRight className="ms-2" />}
                            </div>
                          </div>
                          {openSubMenu[item.label] && (
                            <ul className="nav flex-column ms-4">
                              {item.subMenu.map((subItem, subIndex) => (
                                <li key={subIndex} className="nav-item">
                                  <div className="nav-link text-white d-flex cursor-pointer justify-content-between align-items-center" onClick={() => handleItemClick(subItem.to)} >
                                    <div className='ms-2'>{subItem.label}</div>
                                    <div className='pl-7'>{subItem.icon}</div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          )}
                        </React.Fragment>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Desktop menu */}
        <div className="d-none d-lg-block bg-dark text-white" style={{ minHeight: '100vh', width: '250px', overflowY: 'auto' }}>
          <div>
            <h3 className='px-3'>Pavitrasoft</h3>
            <ul className="nav flex-column">
              {menuItems.map((item, index) => (
                <li key={index} className="nav-item">
                  {!item.subMenu ? (
                    <Link className="nav-link text-white cursor-pointer d-flex align-items-center" to={item.to}>
                      {item.icon} {item.label}
                    </Link>
                  ) : (
                    <React.Fragment>
                      <div
                        className="nav-link text-white d-flex justify-content-between align-items-center"
                        onClick={() => handleSubMenuToggle(item.label)}
                        style={{ cursor: 'pointer' }}
                      >
                          <div className="d-flex align-items-center cursor-pointer">
                          {item.icon} {item.label}
                        </div>
                        <div className="d-flex align-items-center">
                          {openSubMenu[item.label] ? <FaChevronDown className="ms-2" /> : <FaChevronRight className="ms-2" />}
                        </div>
                      </div>
                      {openSubMenu[item.label] && (
                        <ul className="nav flex-column ms-4">
                          {item.subMenu.map((subItem, subIndex) => (
                            <li key={subIndex} className="nav-item">
                              <Link className="nav-link text-white d-flex cursor-pointer justify-content-between align-items-center" to={subItem.to}>
                                <div className='ms-2'>{subItem.label}</div>
                                <div className='pl-7'>{subItem.icon}</div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </React.Fragment>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </>
      );
};
  


export default Menubar;
