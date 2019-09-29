-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 08, 2019 at 06:15 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aquae`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(1, 'admin', 'bayalas123');

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `addr` varchar(250) NOT NULL,
  `cont_num` varchar(20) NOT NULL,
  `Company` varchar(255) NOT NULL,
  `company_logo` varchar(255) NOT NULL,
  `Business_permit` varchar(255) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `fname`, `lname`, `username`, `email`, `password`, `addr`, `cont_num`, `Company`, `company_logo`, `Business_permit`, `status`) VALUES
(70, 'zxczxczxc', 'zxczxczxc', 'admin123', 'asdmin@gmail.com', '0192023a7bbd73250516f069df18b500', 'asdasdasd', 'asdasdasd', 'asdasdasd', 'water5.jpg', 'wolf.jpg,water6.jpg', 'Deactivated'),
(71, 'zxczxc', 'zxczxc', 'zxczxc', 'zxczxc@gmail.com', 'ecb97ffafc1798cd2f67fcbc37226761', 'zxczxc', 'zxczxczxc', 'aczxczxc', 'water5.jpg', 'wolf.jpg,water6.jpg,water5.jpg', 'Deactivated'),
(72, 'xcvxcv', 'xcvxcvxc', 'admin121', 'asdasdasdtt@gmail.com', 'a01610228fe998f515a72dd730294d87', 'asdasd', 'asdasdasd', 'sdasd', 'water5.jpg', 'wolf.jpg,water6.jpg', 'Deactivated'),
(73, 'asq', 'asq', 'asq', 'asq@gmail.com', '1cc18548883588e18b98e37b633b2d4d', 'asq', 'asq', 'asq', 'Rodman.jpg', 'water3.png', 'Deactivated'),
(74, 'czv', 'zcvz', 'adminzcv', 'asdasdasdasdasdasd@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', 'asdasd', 'asdasdasd', 'asdasdasd', 'water.jpg', 'water3.png', 'Deactivated'),
(75, 'zzzzzzz', 'zzzz', 'zzzzz', 'zzz@gmail.com', '02c425157ecd32f259548b33402ff6d3', 'zzzz', 'zzz', 'zzz', 'no.png', 'wolf.jpg,water6.jpg,water5.jpg', 'Deactivated'),
(76, 'zzzzzzz', 'zzzz', 'qqqq', 'zzzqq@gmail.com', '3bad6af0fa4b8b330d162e19938ee981', 'zzzz', 'zzz', 'zzz@gmail.com', '', 'water.jpg', 'Deactivated'),
(77, 'zzzzzzz', 'zzzz', 'qqqq3', 'zz3zqq@gmail.com', '3bad6af0fa4b8b330d162e19938ee981', 'zzzz', 'zzz', 'zzzqq@gmail.com', 'new.png', 'water5.jpg', 'Deactivated'),
(78, 'zzzzzzz', 'zzzz', 'qqqq3zz', 'zz3zzqq@gmail.com', 'f3abb86bd34cf4d52698f14c0da1dc60', 'zzzz', 'zzz', 'zz3zqq@gmail.com', 'water4.png', 'Rodman.jpg', 'Deactivated'),
(79, 'qweqweqwe', 'qweqweqwe', 'qweqwe', 'qweqweqwe@gmail.com', 'efe6398127928f1b2e9ef3207fb82663', 'qweqweqwe', 'qweqweqwe', 'qweqwe', 'water.jpg', 'Rodman.jpg', 'Deactivated'),
(80, 'Sebastian Wolfgang', 'Bayalas', 'wolfgang', 'wolfgang@gmail.com', '96f81a35ee2755ccb1f27b4c582a6765', 'Tabada, Mambaling Cebu City', '09090909091', 'WolfGang', 'wolf.jpg', 'wolf.jpg,water5.jpg,water2.jpg,water.jpg,Rodman.jpg', 'Active'),
(81, 'asd', 'asd', 'asdasdfffas', 'dsa@415', '202cb962ac59075b964b07152d234b70', 'sad', 'dsa', 'asd', 'wolf.jpg', 'Rodman.jpg,Neljohn.jpg,Julius.jpg', 'Active'),
(82, 'Clint', 'Appare', 'clint', 'clint@gmail.com', '96f81a35ee2755ccb1f27b4c582a6765', 'Tagunol, Cogon Pardo Cebu City', '09236752843', 'CLintoy', 'wolf.jpg', 'wolf.jpg,water6.jpg,water4.png', 'Deactivated'),
(83, 'JohnFlor', 'Lodonia', 'jamplor', 'jam@gmail.com', '96f81a35ee2755ccb1f27b4c582a6765', 'Tabada, Mambaling Cebu City', '09090909091', 'Jams', 'wolf.jpg', 'wolf.jpg,water4.png,water3.png,Rodman.jpg,new.png', 'Deactivated'),
(84, 'asdasd', 'asdasd', 'asdasd', 'dasdasd@uyty', '96f81a35ee2755ccb1f27b4c582a6765', 'asdasdad', 'asdasdasd', 'asdasd', 'wolf.jpg', 'wolf.jpg', 'Deactivated'),
(85, 'Nel John', 'Bayalas', 'nels', 'dasdasd@uyty2333', '96f81a35ee2755ccb1f27b4c582a6765', 'sadddd', '09092323', 'Nels', 'wolf.jpg', 'wolf.jpg,water6.jpg,water5.jpg,water3.png', 'Deactivated');

-- --------------------------------------------------------

--
-- Table structure for table `consumers`
--

CREATE TABLE `consumers` (
  `cons_id` int(11) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `addr` varchar(255) NOT NULL,
  `cont_num` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `consumers`
--

INSERT INTO `consumers` (`cons_id`, `fname`, `lname`, `username`, `password`, `email`, `addr`, `cont_num`) VALUES
(3, 'Julius Jay', 'Buenavista', 'julius12', 'password', 'jaybuenavista145@gmail.com', 'Amoa', 2147483647),
(4, 'nel john', 'bayalas', 'neljohn18', 'bayalas123', 'neljohn@gmail.com', 'tagunol', 2147483647);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `prod_id` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `prod_pic` varchar(255) NOT NULL,
  `prod_type` varchar(255) NOT NULL,
  `prod_price` int(255) NOT NULL,
  `delivery_price` int(255) NOT NULL,
  `mop` varchar(11) NOT NULL,
  `no_of_filter` int(11) NOT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`prod_id`, `id`, `prod_pic`, `prod_type`, `prod_price`, `delivery_price`, `mop`, `no_of_filter`, `address`) VALUES
(1, 2, '', 'Gallon Size', 25, 0, 'cash on del', 18, ''),
(2, 3, '', 'Container Size', 25, 0, 'cash on del', 17, ''),
(3, 46, '', 'Bottled Size', 50, 0, 'cash on del', 18, '');

-- --------------------------------------------------------

--
-- Table structure for table `product_type`
--

CREATE TABLE `product_type` (
  `product_type_id` int(255) NOT NULL,
  `product_types` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_type`
--

INSERT INTO `product_type` (`product_type_id`, `product_types`) VALUES
(1, 'Container Size'),
(2, 'Gallon Size'),
(3, 'Bottled Size');

-- --------------------------------------------------------

--
-- Table structure for table `produc_details`
--

CREATE TABLE `produc_details` (
  `id` int(11) NOT NULL,
  `prod_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `produc_details`
--

INSERT INTO `produc_details` (`id`, `prod_id`, `client_id`, `quantity`, `created_at`) VALUES
(1, 1, 62, 2000, '2019-01-01'),
(2, 2, 44, 3351, '2019-02-02'),
(14, 2, 43, 424, '2019-03-06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `consumers`
--
ALTER TABLE `consumers`
  ADD PRIMARY KEY (`cons_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`prod_id`);

--
-- Indexes for table `product_type`
--
ALTER TABLE `product_type`
  ADD PRIMARY KEY (`product_type_id`);

--
-- Indexes for table `produc_details`
--
ALTER TABLE `produc_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `prod_id` (`prod_id`,`client_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT for table `consumers`
--
ALTER TABLE `consumers`
  MODIFY `cons_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `prod_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `product_type`
--
ALTER TABLE `product_type`
  MODIFY `product_type_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `produc_details`
--
ALTER TABLE `produc_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
